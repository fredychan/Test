export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Featuring Details</h1>
            {children}
        </>
    )
}
