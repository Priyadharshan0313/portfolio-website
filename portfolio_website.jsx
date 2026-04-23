export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3">
              Full Stack Developer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              Priyadarsan Ramalingam
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Building scalable backend systems, elegant UI experiences, and
              powerful SIEM solutions with Java, Ember.js, Kubernetes, and
              Elasticsearch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:darsan0305@gmail.com"
                className="px-6 py-3 rounded-2xl shadow-sm border hover:shadow-md transition"
              >
                Contact Me
              </a>
              <button className="px-6 py-3 rounded-2xl bg-black text-white shadow-sm hover:opacity-90 transition">
                Download Resume
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Quick Info</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Location:</strong> Kallakudi, Trichy</p>
              <p><strong>Experience:</strong> 4+ Years</p>
              <p><strong>Role:</strong> Senior Software Developer</p>
              <p><strong>Specialization:</strong> SIEM & Full Stack Development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Java, C, C++, Python",
              "Ember.js, JavaScript, HTML, CSS",
              "Kubernetes, Elasticsearch, Git, IntelliJ",
              "REST APIs & Backend Architecture",
              "UI Automation & Component Analysis",
              "Performance Optimization & SIEM Tools",
            ].map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              UI Automation Tool
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Built a system that analyzes raw HTML and UI screenshots to detect
              modal sections, dropdowns, tables, and nested UI structures, then
              maps them into Ember.js components automatically.
            </p>
          </div>

          <div className="p-6 rounded-3xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              SIEM Performance Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Improved report and dashboard performance by optimizing
              Elasticsearch queries, indexing strategy, and caching flow,
              resulting in significantly faster execution.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great</h2>
          <p className="text-gray-300 mb-6">
            Open to exciting full stack and backend engineering opportunities.
          </p>
          <a
            href="mailto:darsan0305@gmail.com"
            className="inline-block px-8 py-3 rounded-2xl bg-white text-black font-medium"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
