import Form from "./Form";

function App() {
	return (
		<div className="flex items-center flex-col">
			<div className="flex shadow-lg w-4/5 p-4 rounded-lg my-20">
				<div className="contacts bg-gray-100 p-4 w-2/5 rounded-lg">
					<h1 className="text-2xl font-bold mb-5">Contact Us</h1>
					<ul className="">
						<li className="mt-5">
							<h2 className="font-semibold ">Inseptions</h2>
							<p className="text-xs">
								(800)309-6755 | info@wini.com
							</p>
						</li>
						<li className="mt-5">
							<h2 className="font-semibold">Franchising</h2>
							<p className=" text-xs">
								(800)309-6753 | info@wini.com
							</p>
						</li>
						<li className="mt-5">
							<h2 className="font-semibold">Vendors</h2>
							<p className=" text-xs">
								(312)557-9319 | vendors@wini.com
							</p>
						</li>
					</ul>
				</div>
				<Form />
			</div>
			<div className="bg-gray-300 p-10 w-4/5 flex flex-col items-center mb-20 rounded-lg">
				<h1 className="text-4xl font-bold">Subscribe to our emails</h1>
				<p className="m-4">
					Enter your email address to recieve the latest
					notificaitons, newsletters and updates from WINI
				</p>
				<form action="">
					<input
						type="email"
						name="email"
						className="outline-none p-3 rounded-lg font-semibold mr-4 w-80"
						placeholder="Your email address"
					/>
					<button
						type="submit"
						className="px-10 py-3 bg-amber-600 rounded-lg text-white font-semibold"
					>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
