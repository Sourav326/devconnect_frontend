const Reviews = () => {
    const reviews = [
        {
          id: 1,
          name: "John Carter",
          role: "Senior React Developer",
          image: "https://i.pravatar.cc/150?img=1",
          review:
            "I found my startup co-founder through DevConnect. The community is amazing!",
        },
        {
          id: 2,
          name: "Sarah Lee",
          role: "Full Stack Engineer",
          image: "https://i.pravatar.cc/150?img=2",
          review:
            "Finally a social platform built specifically for developers.",
        },
        {
          id: 3,
          name: "David Kim",
          role: "Open Source Maintainer",
          image: "https://i.pravatar.cc/150?img=3",
          review:
            "Found contributors for my open-source project within a week.",
        },
      ];
    return (
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800">
              Loved by Developers ❤️
            </h2>
  
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
              Join thousands of developers building friendships,
              collaborating on projects and growing together.
            </p>
          </div>
  
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
  
            {reviews.map((review) => (
                <div key={review.id} className="group relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Decorative Gradient */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative">

                    {/* Top */}

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-4">

                        <img
                            src={review.image}
                            className="h-16 w-16 rounded-2xl object-cover ring-4 ring-indigo-100"
                            alt=""
                        />

                        <div>

                            <h3 className="font-bold text-lg text-slate-800">
                            {review.name}
                            </h3>

                            <p className="text-sm text-slate-500">
                            {review.role}
                            </p>

                            <div className="mt-2 flex gap-1">
                            <span className="badge badge-primary badge-sm">React</span>
                            <span className="badge badge-secondary badge-sm">Node.js</span>
                            </div>

                        </div>

                        </div>

                        <div className="text-yellow-400 text-xl">
                        ⭐⭐⭐⭐⭐
                        </div>

                    </div>

                    {/* Review */}

                    <p className="mt-6 text-slate-600 leading-8">
                        "{review.review}"
                    </p>

                    {/* Footer */}

                    <div className="mt-8 flex items-center justify-between border-t pt-5">

                        <div className="flex -space-x-3">

                        <img
                            className="w-9 h-9 rounded-full border-2 border-white"
                            src="https://i.pravatar.cc/100?img=10"
                        />

                        <img
                            className="w-9 h-9 rounded-full border-2 border-white"
                            src="https://i.pravatar.cc/100?img=11"
                        />

                        <img
                            className="w-9 h-9 rounded-full border-2 border-white"
                            src="https://i.pravatar.cc/100?img=12"
                        />

                        </div>

                        <button className="btn btn-sm btn-outline rounded-full">
                        View Profile →
                        </button>

                    </div>

                    </div>

                </div>
  
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Reviews;