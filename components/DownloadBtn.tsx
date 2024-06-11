'use client';

const DownloadBtn = () => {
	const downloadFile = () => {
		const pdfFilePath = '/CV.Denys Samoilenko.Front End Developer.pdf';
		const url = window.location.origin + pdfFilePath;

		const link = document.createElement('a');
		link.href = url;
		link.download = 'CV.Denys Samoilenko.Front End Developer.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button
			onClick={downloadFile}
			className="group flex gap-2 items-center bg-[#5C62EC] px-3 py-2 rounded-md hover:bg-white hover:text-[#5C62EC] hover:border-[#5C62EC] transition-colors duration-500"
		>
			Download CV
			<span className="inline-block group-hover:animate-bounce">&#8595;</span>
		</button>
	);
};

export default DownloadBtn;
