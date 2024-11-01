const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-10">
		  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
			
			<div>
			  <h2 className="text-xl font-bold mb-2">Bhukkad Box</h2>
			  <p className="text-gray-400">Delivering delicious food right to your door in Jaipur, Rajasthan.</p>
			</div>
			
			<div>
			  <h4 className="text-lg font-semibold mb-2">Contact Information</h4>
			  <p>CEO: Harshvardhan Singh Rao</p>
			  <p>Email: <a href="mailto:hr2697020@gmail.com" className="text-yellow-400 hover:underline">hr2697020@gmail.com</a></p>
			  <p>Phone: <a href="tel:+919660559463" className="text-yellow-400 hover:underline">+91 9660559463</a></p>
			  <p>Address: Jaipur, Rajasthan</p>
			</div>
			
			<div>
			  <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
			  <ul className="space-y-1">
				<li><a href="/about" className="text-gray-400 hover:text-yellow-400">About Us</a></li>
				<li><a href="/contact" className="text-gray-400 hover:text-yellow-400">Contact Us</a></li>
				<li><a href="/terms" className="text-gray-400 hover:text-yellow-400">Terms & Conditions</a></li>
				<li><a href="/privacy" className="text-gray-400 hover:text-yellow-400">Privacy Policy</a></li>
			  </ul>
			</div>
			
			<div>
			  <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
			  <ul className="space-y-1">
				<li><a href="https://facebook.com" className="text-gray-400 hover:text-yellow-400">Facebook</a></li>
				<li><a href="https://instagram.com" className="text-gray-400 hover:text-yellow-400">Instagram</a></li>
				<li><a href="https://twitter.com" className="text-gray-400 hover:text-yellow-400">Twitter</a></li>
			  </ul>
			</div>
			
		  </div>
		  
		  <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
			&copy; {new Date().getFullYear()} Bhukkad Box. All rights reserved.
		  </div>
		</footer>
	  );
}
export default Footer;