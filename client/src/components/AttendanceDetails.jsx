import { useState, useEffect } from "react";
import myimage from "../images/details.jpg";

const styles = {
  container: {
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem",
    color: "white",
    borderRadius: "0.25rem",
    marginRight: "0.5rem",
  },
  exportButton: {
    backgroundColor: "#4299e1",
  },
  printButton: {
    backgroundColor: "#48bb78",
  },
  loadingText: {
    ariaLive: "polite",
  },
  errorText: {
    color: "#f56565",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "0.5rem 1rem",
    textAlign: "left",
    borderBottom: "2px solid #e2e8f0",
  },
  td: {
    padding: "0.5rem 1rem",
    borderBottom: "1px solid #e2e8f0",
  },
  present: {
    color: "#48bb78",
  },
  absent: {
    color: "#f56565",
  },
};

function AttendanceDetails() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberAttendance = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/attendancedetails");
        if (!response.ok) {
          throw new Error("Failed to fetch attendance details");
        }
        const data = await response.json();

        const sundayAttendance = data.filter((member) => {
          const attendanceDate = new Date(member.date);
          return attendanceDate.getDay() === 0;
        });

        setMembers(sundayAttendance);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMemberAttendance();
  }, []);

  const exportToCSV = () => {};

  const printReport = () => {
    window.print();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button
        onClick={handleGoBack}
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        Back
      </button>
      <div style={styles.container}>
        <button
          onClick={exportToCSV}
          style={{ ...styles.button, ...styles.exportButton }}
        >
          Export to CSV
        </button>
        <button
          onClick={printReport}
          style={{ ...styles.button, ...styles.printButton }}
        >
          Print Report
        </button>
      </div>
      {loading ? (
        <p style={styles.loadingText}>Loading attendance details...</p>
      ) : error ? (
        <p style={styles.errorText}>{error}</p>
      ) : members.length === 0 ? (
        <p>No attendance records available for Sundays.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Member Name</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td
                  style={styles.td}
                >{`${member.first_name} ${member.last_name}`}</td>
                <td style={styles.td}>{member.date}</td>
                <td
                  style={{
                    ...styles.td,
                    ...(member.present ? styles.present : styles.absent),
                  }}
                >
                  {member.present ? "Present" : "Absent"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AttendanceDetails;
