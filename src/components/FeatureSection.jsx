import React from 'react';
import './FeatureSection.css'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Decentralized Inference",
      description:
        "Run large language models across multiple peers, enabling distributed and efficient computation.",
      icon: "🌐",
    },
    {
      id: 2,
      title: "WebGPU Integration",
      description:
        "Leverage the power of modern GPUs directly from your browser for accelerated AI processing.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Scalable Architecture",
      description:
        "Scale effortlessly across devices with fault tolerance and dynamic node allocation.",
      icon: "📈",
    },
    {
      id: 4,
      title: "Enhanced Privacy",
      description:
        "Keep sensitive data on your local device while contributing to decentralized AI computations.",
      icon: "🔒",
    },
  ];

  return (
    <section className="features" id="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
