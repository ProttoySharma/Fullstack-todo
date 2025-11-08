
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 ">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} TodoApp by Prottoy Sharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
