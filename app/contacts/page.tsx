'use client';
import { motion } from 'framer-motion';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contacts = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode: 'onBlur' });

	const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
		try {
			const response = await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
				e?.target as HTMLFormElement,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
			);

			if (response.status === 200) {
				reset();
				console.log('Email sent successfully');
			} else {
				console.error('Failed to send email');
			}
		} catch (error) {
			console.error('Error sending email:', error);
		}
	};

	return (
		<main className="flex flex-col items-center p-4 overflow-hidden">
			<div className="flex flex-col gap-8 pb-10 md:pb-[20px] w-1/2 md:w-1/3">
				<motion.h1
					initial={{ y: -300 }}
					animate={{ y: 0 }}
					className="text-center"
				>
					Contacts
				</motion.h1>
				<motion.form
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					onSubmit={handleSubmit(onSubmit)}
					className="bg-[#26282d] flex flex-col gap-4 p-4 rounded-md "
				>
					<label className="flex flex-col gap-2">
						<input
							type="text"
							{...register('name', {
								maxLength: { value: 30, message: 'Your name too long' },
								minLength: { value: 2, message: 'Your name too short' },
								pattern: {
									value: /^(?! )[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’ʼ ]*(?<! )$/,
									message: 'Use only letters',
								},
							})}
							minLength={2}
							maxLength={30}
							placeholder="Name"
						/>
						{errors.name && (
							<p className="text-xs text-[#d34141]">
								{errors.name?.message as string}
							</p>
						)}
					</label>
					<label className="flex flex-col gap-2">
						<input
							type="email"
							{...register('email', {
								required: 'This field is required',
								maxLength: { value: 30, message: 'Your email too long' },
								minLength: { value: 3, message: 'Your email too short' },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address',
								},
							})}
							minLength={3}
							maxLength={30}
							placeholder="Email"
						/>
						{errors.email && (
							<p className="text-xs text-[#d34141]">
								{errors.email?.message as string}
							</p>
						)}
					</label>

					<textarea
						{...register('message', {})}
						placeholder="Message"
					></textarea>

					<button
						type="submit"
						className="flex gap-2 justify-center items-center bg-[#5C62EC] px-3 py-2 rounded-md hover:bg-white hover:text-[#5C62EC] hover:border-[#5C62EC] transition-colors duration-500"
					>
						Send message
					</button>
				</motion.form>
			</div>
		</main>
	);
};

export default Contacts;
