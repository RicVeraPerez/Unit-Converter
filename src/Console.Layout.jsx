import "./ConsoleLayout.css"


const ConsoleLayout = ({ children }) => {
   
    return (
        <div className="console-layout">
            <div className="console-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="console-title">Unit Converter</span>
            </div>
            <div className="console-content">
                {children}
            </div>
        </div>
    );
}

export default ConsoleLayout;