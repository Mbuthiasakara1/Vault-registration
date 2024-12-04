import { useState, useEffect } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import backgroudimage from '../images/reportbg.jpg'
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const styles = {
  container: {
    backgroundImage: `url(${backgroudimage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: "100vh",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  backButton: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#1e3a8a", // Professional dark blue
    color: "white",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
  backButtonHover: {
    backgroundColor: "#4f46e5", // Lighter blue on hover
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1.5rem",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
  },
  totalMembers: {
    fontSize: "1.25rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "1.5rem",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Adding a transparent background to make text clearer
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  chartsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  },
  pieChart: {
    width: "24rem",
    height: "24rem",
    borderRadius: "0.5rem",
    background: "linear-gradient(to right, #00bcd4, #00838f)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  lineChart: {
    width: "100%",
    maxWidth: "40rem",
    height: "16rem",
    borderRadius: "0.5rem",
    background: "linear-gradient(to right, #e3f2fd, #90caf9)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  loadingText: {
    textAlign: "center",
    fontSize: "1.25rem",
    color: "#ffffff",
    fontWeight: "500",
  },
  errorText: {
    textAlign: "center",
    fontSize: "1.25rem",
    color: "#ff6b6b",
    fontWeight: "500",
  },
  "@media (min-width: 768px)": {
    chartsContainer: {
      flexDirection: "row",
    },
  },
};

function AttendanceReport() {
  const [totalMembers, setTotalMembers] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);
  const [absentMembers, setAbsentMembers] = useState(0);
  const [attendanceTrends, setAttendanceTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/reports");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTotalMembers(data.totalMembers);
        setAttendancePercentage(data.attendancePercentage);
        setAbsentMembers(data.absentMembers);
        setAttendanceTrends(data.attendanceTrends);
      } catch (err) {
        console.error("Error fetching attendance data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  const pieData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [attendancePercentage, 100 - attendancePercentage],
        backgroundColor: ['#4caf50', '#f44336'],
      },
    ],
  };

  const lineData = {
    labels: attendanceTrends.map((item) => item.date),
    datasets: [
      {
        label: 'Attendance Trend',
        data: attendanceTrends.map((item) => item.percentage),
        fill: false,
        borderColor: '#42a5f5',
      },
    ],
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div style={styles.container}>
      <button
        onClick={handleGoBack}
        style={styles.backButton}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.backButtonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.backButton.backgroundColor}
      >
        Back
      </button>

      {loading ? (
        <p style={styles.loadingText}>Loading...</p>
      ) : error ? (
        <p style={styles.errorText}>{error}</p>
      ) : (
        <div style={styles.chartsContainer}>
          <h2 style={styles.header}>Attendance Report</h2>

          <div style={styles.totalMembers}>
            <h3>Total Members: {totalMembers}</h3>
            <h3>Attendance Percentage: {attendancePercentage}%</h3>
            <h3>Absent Members: {absentMembers}</h3>
          </div>

          <div style={styles.chartsContainer}>
            <div style={styles.pieChart}>
              <Pie data={pieData} />
            </div>

            <div style={styles.lineChart}>
              <Line data={lineData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttendanceReport;
