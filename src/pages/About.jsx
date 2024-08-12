import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { toast } from "sonner"

const About = () => {
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an API call or any asynchronous operation
        // Replace this with your actual data fetching logic
        await new Promise(resolve => setTimeout(resolve, 1000))
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("An error occurred while loading the page. Please try again.")
        toast.error("Failed to load data. Please refresh the page.")
      }
    }

    fetchData().catch(err => {
      console.error("Unhandled promise rejection:", err)
      setError("An unexpected error occurred. Please try again.")
      toast.error("An unexpected error occurred. Please refresh the page.")
    })
  }, [])

  if (error) {
    return <div className="container mx-auto px-4 py-20 text-center text-red-500">{error}</div>
  }
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">About Leya</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">At Leya, we're on a mission to revolutionize the legal industry through cutting-edge AI technology. We believe in empowering lawyers to work smarter, faster, and more efficiently.</p>
        </div>
        <div>
          <img src="/placeholder.svg" alt="Leya Office" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[300px]" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { name: "Max Junestrand", role: "CEO & Co-founder" },
          { name: "August Erseus", role: "Co-founder" },
          { name: "Sigge Labor", role: "Co-founder" }
        ].map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt={member.name} className="rounded-full mx-auto object-cover w-32 h-32" />
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
      <div className="space-y-8">
        {[
          { year: "2023", event: "Leya founded by Max Junestrand, August Erseus, and Sigge Labor" },
          { year: "2023", event: "Accepted into Y Combinator" },
          { year: "2023", event: "Secured backing from top-tier investors including Benchmark and Redpoint" },
          { year: "2023", event: "Began collaboration with Mannheimer Swartling" }
        ].map((milestone, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mr-4">{milestone.year}</div>
            <p className="text-lg">{milestone.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
