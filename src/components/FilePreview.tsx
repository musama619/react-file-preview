import { useContext, useEffect, useState } from "react";
import FileFooter from "./FileFooter";
import { FilePreviewProps } from "./types";
import { filePreviewStyle } from "./FilePreviewStyle";
import { FileContext } from "../context/FileContext";

const imageFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/tiff"];

const FilePreview: React.FC<FilePreviewProps> = ({ file, index }) => {
	const [fileSrc, setFileSrc] = useState<string | null>(null);
	useEffect(() => {
		const fileUrl = URL.createObjectURL(file);
		setFileSrc(fileUrl);
		return(() => URL.revokeObjectURL(fileUrl))
	}, [file]);

	const previewStyle = filePreviewStyle.filter((item) => item.type == file.type);
	const componentState = useContext(FileContext).state.componentState;

	const { dispatch } = useContext(FileContext);

	const setZoom = () => {
		dispatch({
			type: "STORE_FILE_STATE",
			payload: {
				zoom: true,
				fileSrc: fileSrc,
				index: index,
				isImage: imageFileTypes.includes(file.type),
				fileName: file.name,
				type: file.type,
				size: file.size,
			},
		});
	};

	return (
		<>
			<div
				data-testid="file-preview"
				onClick={() => setZoom()}
				className={`${
					componentState.rounded && "rounded-lg"
				} border-solid border-slate-200 hover:shadow-lg  shadow-md hover:cursor-pointer`}
			>
				{imageFileTypes.includes(file.type) ? (
					fileSrc && (
						<img
							data-testid="image-preview"
							src={fileSrc}
							className={`${componentState.fileHeight} ${componentState.fileWidth} object-fill scale-[0.9]`}
						></img>
					)
				) : (
					<div
						data-testid="file-icon-preview"
						className={`${componentState.fileHeight} ${componentState.fileWidth} flex flex-col justify-center content-center items-center`}
					>
						<span
							className={`${previewStyle.length > 0 ? previewStyle[0].color : "bg-slate-400"} 
                        rounded flex w-16 justify-center h-20 items-center`}
						>
							{previewStyle.length > 0 ? (
								previewStyle[0].icon
							) : (
								<svg
									data-testid="default-icon"
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-40 text-4xl"
									viewBox="0 0 16 16"
								>
									<path d="M7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM5 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
									<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
								</svg>
							)}
						</span>
					</div>
				)}
			</div>
			<div className="h-5 w-44">{fileSrc && <FileFooter file={file} fileSrc={fileSrc} />}</div>
		</>
	);
};

export default FilePreview;
