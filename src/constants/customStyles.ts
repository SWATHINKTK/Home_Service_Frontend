export const modalCustomStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        zIndex: 0,  // Ensure the modal content is above other elements
    },
    // overlay: {
    //     backgroundColor: 'rgba(217, 216, 212)',
    //     zIndex: 0,  // Ensure the overlay is below the modal content but above other content
    // }
};



export const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };