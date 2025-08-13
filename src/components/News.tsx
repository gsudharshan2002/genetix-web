import { useState, useEffect } from "react";
import { FaLocationPin, FaSpinner } from "react-icons/fa6";

const News = () => {
  interface NewsItem {
    image_url: string;
    country: string[];
    title: string;
    description: string;
    link: string;
  }

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://newsdata.io/api/1/latest?apikey=pub_7fd6d9287b0e4b11b336dbcf2df47234&q=tech%2C&category=technology,business"
      );
      const data = await res.json();
      setNews(data.results);
    } catch (err) {
      console.error("Error in getting News", err);
      setError(true);
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="py-16 px-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Today's <span className="text-green-500">Tech</span> News
      </h1>

      {error ? (
        <p className="text-red-500 text-center">Failed to load news. Try again later.</p>
      ) : loading ? (
        <FaSpinner className="animate-spin mx-auto text-2xl text-green-600" />
      ) : (
        <div className="flex gap-7 overflow-x-auto py-6 scrollbar-hide ">
          {news.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-[300px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 space-y-2"
            >
              <div className="relative h-48 w-full mb-4">
                <img
                  src={item.image_url || "https://via.placeholder.com/300x200"}
                  alt="News"
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="absolute top-1 left-1 flex items-center gap-1 bg-green-500 rounded-2xl px-2 py-[2px] shadow-sm">
                  <FaLocationPin className="text-white text-sm" />
                  <p className="text-white text-xs font-semibold">
                    {item.country?.[0]?.toUpperCase() || "INT"}
                  </p>
                </div>
              </div>

              <h5 className="font-bold text-lg">{item.title}</h5>
              <p className="text-gray-600 text-sm">
                {item.description ? item.description.slice(0, 100) + "..." : "No description available."}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm inline-block mt-2"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default News;
