import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Home = () => {
  const statusData = [
    { name: "Active Applications", value: 12, color: "hsl(var(--primary))" },
    { name: "Interviews Scheduled", value: 5, color: "hsl(var(--chart-2))" },
    { name: "Offers Received", value: 2, color: "hsl(var(--chart-3))" },
    { name: "Rejected", value: 8, color: "hsl(var(--muted))" },
  ];

  const reportsData = [
    { name: "Technology", value: 35, color: "hsl(var(--primary))" },
    { name: "Finance", value: 25, color: "hsl(var(--chart-2))" },
    { name: "Healthcare", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Marketing", value: 15, color: "hsl(var(--chart-4))" },
    { name: "Other", value: 5, color: "hsl(var(--muted))" },
  ];

  const feedbackData = [
    { name: "Positive", value: 18, color: "hsl(var(--chart-3))" },
    { name: "Neutral", value: 7, color: "hsl(var(--chart-2))" },
    { name: "Needs Improvement", value: 2, color: "hsl(var(--muted))" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold font-heading text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Track your job search progress and insights</p>
        </div>

        <Tabs defaultValue="status" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="status" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold font-heading mb-4">Application Status Overview</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {statusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {statusData.map((item) => (
                <Card key={item.name} className="p-4">
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{item.value}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold font-heading mb-4">Applications by Industry</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={reportsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {reportsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {reportsData.map((item) => (
                <Card key={item.name} className="p-4">
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{item.value}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold font-heading mb-4">Interview Feedback Summary</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={feedbackData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {feedbackData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {feedbackData.map((item) => (
                <Card key={item.name} className="p-4">
                  <p className="text-sm text-muted-foreground">{item.name}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{item.value}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
