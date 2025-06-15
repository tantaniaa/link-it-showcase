
import React from "react";

type Testimonial = {
  avatar: string;
  name: string;
  caption: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) return null;
  const t = testimonials[index];

  return (
    <div className="flex justify-center mt-6 mb-2">
      <div className="bg-white border border-food-primary shadow-md px-6 py-4 rounded-2xl flex items-center gap-4 min-w-[240px] max-w-xs animate-fade-in">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-12 h-12 rounded-full border-2 border-food-accent object-cover"
        />
        <div>
          <div className="font-nunito font-bold text-sm text-food-cta break-words">{t.caption}</div>
          <div className="font-nunito text-xs text-food-accent mt-1">— {t.name}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
