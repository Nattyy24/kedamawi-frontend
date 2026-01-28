export default function Home() {
  return (
    <main>
      <h1 style={{padding:"30px"}}>Hire & Work Smarter in Ethiopia 🇪🇹</h1>

      <div className="jobs-grid">
        <div className="job-card">
          <h3>Logo Designer</h3>
          <p>Budget: 2,000 ETB</p>
          <button className="apply-btn">Apply</button>
        </div>

        <div className="job-card">
          <h3>React Developer</h3>
          <p>Budget: $800</p>
          <button className="apply-btn">Apply</button>
        </div>
      </div>
    </main>
  );
}
