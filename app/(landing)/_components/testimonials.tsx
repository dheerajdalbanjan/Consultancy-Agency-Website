import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { QuoteIcon, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
name: 'Sneha Kurodi',
role: 'College Student',
content: 'Your services are pretty good, easily accessible which is great and my experience with your company has been amazing. you guys are the besttt 💯.'
  },
  {
    id: 2,
name: 'Sachin SK',
role: 'Data Analyst',
content: 'I’ve never felt so understood. The psychologists at OurSoulss are not only highly skilled but also incredibly empathetic. Their friendly demeanor makes every session feel safe and welcoming.'
},
{
  id: 3,
name: 'Khushi',
role: 'College Student',
content: 'I was hesitant about online therapy, but OurSoulss changed my mind. The expertise of the psychologists is evident, and I trust them completely with my mental health journey.'
},
{
  id: 4,
  name: 'Lavanya V',
  role: 'College Student',
  content: "The team at OurSoulss is amazing! Their professional guidance has truly transformed my life. The  psychologist I've worked with is not only skilled but genuinely cares about my well-being."
},

];

const TestimonialCard = ({ name, role, content }:{name: string, role : string, content: string}) => (
  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-opacity-70 border-blue-100">
    <CardHeader className="relative pb-0">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <User className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
          <p className="text-sm text-blue-600">{role}</p>
        </div>
      </div>
      <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
    </CardHeader>
    <CardContent className="pt-4">
      <p className="text-sm text-blue-700">&ldquo;{content}&rdquo;</p>
    </CardContent>
  </Card>
);

const TestimonialsComponent = () => {
  return (
    <div className="relative overflow-hidden py-16 bg-transparent">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-blue-500/[0.2] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]" />
      </div>
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <h2 className="text-4xl font-bold  mb-12 ">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;