import { useQuery } from "@tanstack/react-query";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Shared/Loading";
import { IEvent, IUser } from "../../types";

const AdminStats = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data as IUser[];
    },
  });

  const { data: events = [], isLoading: eventsLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get("/events");
      return res.data as IEvent[];
    },
  });

  const totalRevenue = events.reduce(
    (total: number, event: IEvent) => total + Number(event.price || 0),
    0
  );

  if (usersLoading || eventsLoading) {
    return <Loading />;
  }

  const statCards = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
    },
    {
      title: "Total Events",
      value: events.length,
      icon: Calendar,
    },
    {
      title: "Total Revenue",
      value: `Tk ${totalRevenue}`,
      icon: DollarSign,
    },
  ];

  const chartData = [
    {
      name: "Users",
      value: users.length,
      displayValue: users.length,
      color: "#a3e635",
    },
    {
      name: "Events",
      value: events.length,
      displayValue: events.length,
      color: "#2dd4bf",
    },
    {
      name: "Revenue (in hundreds)",
      value: Math.round(totalRevenue / 100),
      displayValue: `Tk ${totalRevenue}`,
      color: "#fbbf24",
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-200">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
            {payload[0].payload.name}
          </p>
          <p className="text-lg font-black text-gray-900">
            {payload[0].payload.displayValue}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className="relative bg-gradient-to-br from-gray-50 via-lime-50/30 to-gray-50 p-8 rounded-3xl border border-gray-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl"></div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-700 rounded-xl text-xs font-bold uppercase tracking-wide mb-4">
            <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
            Live Dashboard
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Welcome back, Admin! Here's what's happening today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-lime-400 transition-all duration-300 group overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-50/0 to-emerald-50/0 group-hover:from-lime-50/50 group-hover:to-emerald-50/30 transition-all duration-500"></div>

            {/* Content */}
            <div className="relative flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-2xl bg-gray-100 text-gray-400 group-hover:bg-gradient-to-br group-hover:from-lime-100 group-hover:to-emerald-100 group-hover:text-lime-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 transform">
                  <stat.icon size={28} strokeWidth={2.5} />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-lime-600 transition-colors">
                  <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-lime-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-lime-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-lime-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {stat.title}
                </p>
                <h3 className="text-4xl font-black text-gray-900 group-hover:text-lime-600 transition-colors">
                  {stat.value}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-8 rounded-3xl border-2 border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="text-lime-600" size={24} />
              Statistics Overview
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Visual representation of key metrics
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-xl text-xs font-bold">
            <TrendingUp size={16} />
            Analytics
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }: any) =>
                `${name}: ${((percent || 0) * 100).toFixed(0)}%`
              }
              outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminStats;
