import React, { useState } from 'react';
import Modal from './Modal';

const TreeNode = ({ node }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <li>
            <button onClick={handleModalOpen}>{node.name}</button>
            {isModalOpen && (
                <Modal title={node.name} onClose={handleModalClose}>
                    <p>{node.description}</p>
                </Modal>
            )}
            {node.children && (
                <ul>
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default TreeNode;
