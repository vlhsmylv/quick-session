export default function Layout({children}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            gap: "10px"
        }}>
            {children}
        </div>
    )
}