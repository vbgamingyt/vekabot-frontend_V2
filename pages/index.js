export default function Home() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>🚗 Welkom bij VEKA BOT! 🚗</h1>
            <p>Klik op de knop hieronder om te starten!</p>
            <button 
                onClick={() => alert("VEKA BOT werkt!")} 
                style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
            >
                Start VEKA BOT
            </button>
        </div>
    );
}
