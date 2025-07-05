import FancyGreeting from '../data';

export default function DataPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <FancyGreeting name="Visitor" />
    </div>
  );
}
