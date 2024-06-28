import UserAnalytics from "@/components/UserAnalytics";
import RevenueMetrics from "@/components/RevenueMetrics";
import Notifications from "@/components/Notifications";

export default function DashboardLayout({
    children,
    users,
    revenue,
    notification
  }: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
  }) {
    return (
      <div>
        <div>{children}</div>
        <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display:"flex", flex:1}}>{notification}</div>
        </div>
      </div>
    )
  }
  