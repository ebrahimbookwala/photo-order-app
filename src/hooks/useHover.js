import { useEffect, useRef, useState } from "react";

function useHover() {
	const [isHovered, setIsHovered] = useState(false);
	const hoverItem = useRef(null);

	const toggleIsHovered = () => {
		setIsHovered((prev) => !prev);
	};

	useEffect(() => {
		const currentItem = hoverItem.current;
		currentItem.addEventListener("mouseenter", toggleIsHovered);
		currentItem.addEventListener("mouseleave", toggleIsHovered);

		return () => {
			currentItem.removeEventListener("mouseenter", toggleIsHovered);
			currentItem.removeEventListener("mouseleave", toggleIsHovered);
		};
	}, []);

	return [isHovered, hoverItem];
}

export default useHover;
