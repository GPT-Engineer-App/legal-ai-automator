import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "sonner"

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Revolutionizing Legal Work with AI</h1>
        <p className="text-xl mb-8">Leya's AI assistant automates and enhances legal tasks, empowering lawyers to work smarter.</p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Request Demo</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-2">Backed by</p>
          <div className="flex justify-center items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" alt="Y Combinator" className="h-20 w-20 object-contain" />
            <img src="https://media.licdn.com/dms/image/D4E0BAQFHrNAl61K7iQ/company-logo_200_200/0/1684868522616/benchmark_vc_logo?e=2147483647&v=beta&t=vA2A5YxjXImFIu07NP2oINLHbuB-Y8PAs1zdhI1l2Mk" alt="Benchmark" className="h-20 w-20 object-contain" />
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/redpoint_logo_icon_168868.png" alt="Redpoint" className="h-20 w-20 object-contain" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Leya</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI-Powered Efficiency", description: "Automate routine tasks and focus on high-value work" },
            { title: "Seamless Integration", description: "Easily integrate with your existing legal workflows" },
            { title: "Enhanced Accuracy", description: "Reduce human error and improve document quality" }
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">About Leya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/placeholder.svg" alt="Leya Team" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="mb-4">Founded by Max Junestrand, August Erseus, and Sigge Labor, Leya is on a mission to transform the legal industry with cutting-edge AI technology.</p>
            <ul className="space-y-2">
              {[
                "Accepted into Y Combinator",
                "Backed by top-tier investors",
                "Collaborating with most top legal firms around Europe"
              ].map((achievement, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6" variant="outline">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
