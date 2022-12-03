import React from "react";

const Form = () => {
	return (
		<div className="form p-10">
			<form action="">
				<div className="flex m-5 gap-10">
					<div className="flex flex-col gap-3">
						<label htmlFor="name" className="font-bold text-md">
							Name
						</label>
						<input
							type="text"
							name="name"
							className="border-2 border-gray-200 outline-none p-4 text-sm font-semibold"
							placeholder="Full Name"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="email" className="font-bold text-md">
							Email
						</label>
						<input
							type="email"
							name="email"
							placeholder="xyz@abc.com"
							className="border-2 border-gray-200 outline-none p-4 text-sm font-semibold"
						/>
					</div>
				</div>
				<div className="flex m-5 gap-10">
					<div className="flex flex-col gap-3">
						<label htmlFor="phone" className="font-bold text-md">
							Phone Number
						</label>
						<input
							type="number"
							name="phone"
							className="border-2 border-gray-200 outline-none p-4 font-semibold text-sm"
							placeholder="(123)4567-7890"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="code" className="font-bold text-md">
							ZIP Code
						</label>
						<input
							type="number"
							name="code"
							placeholder="XXXX"
							className="border-2 border-gray-200 outline-none p-4 text-sm font-semibold"
						/>
					</div>
				</div>
				<div className="flex flex-col m-5 gap-3">
					<label htmlFor="message" className="font-bold text-md">
						Message
					</label>
					<textarea
						name="message"
						cols={50}
						rows={5}
						className="border-2 border-gray-200 outline-none p-4 resize-none text-sm font-semibold"
						placeholder="Please type it here..."
					/>
				</div>
				<button
					type="submit"
					className="px-5 py-3 bg-cyan-900 text-white font-semibold rounded-md m-5 text-sm"
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default Form;
