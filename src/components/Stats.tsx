export function Stats() {
    const stats = [
      { value: "1M+", label: "Active Users" },
      { value: "50K+", label: "Daily Posts" },
      { value: "200+", label: "Content Sources" },
      { value: "98%", label: "User Satisfaction" }
    ]
  
    return (
      <section className="py-16 bg-gradient-to-r  max-w-3xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-purple-400 mb-2">{stat.value}</p>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  