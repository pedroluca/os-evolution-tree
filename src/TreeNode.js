import React, { useState } from 'react';
import Modal from './Modal';
import redhatIcon from '../src/os-logos/redhat.svg';
import androidIcon from '../src/os-logos/android.svg';
import chromeIcon from '../src/os-logos/chrome.svg';
import linuxIcon from '../src/os-logos/linux.svg';
import fedoraIcon from '../src/os-logos/fedora.svg';
import ubuntuIcon from '../src/os-logos/ubuntu.svg';
import appleIcon from '../src/os-logos/apple.svg';
import macosIcon from '../src/os-logos/macos.svg';
import windows10Icon from '../src/os-logos/windows10.svg';
import windows7Icon from '../src/os-logos/windows7.svg';
import bsdIcon from '../src/os-logos/bsd.svg';
import debianIcon from '../src/os-logos/debian.svg';
import windowsPhoneIcon from '../src/os-logos/windows-phone.svg';
import ibmIcon from '../src/os-logos/ibm.svg';
import gnuIcon from '../src/os-logos/gnu.svg';
// Importe outros ícones conforme necessário

const icons = {
    redhat: redhatIcon,
    android: androidIcon,
    chrome: chromeIcon,
    linux: linuxIcon,
    fedora: fedoraIcon,
    ubuntu: ubuntuIcon,
    apple: appleIcon,
    macos: macosIcon,
    windows10: windows10Icon,
    windows7: windows7Icon,
    bsd: bsdIcon,
    debian: debianIcon,
    windowsPhone: windowsPhoneIcon,
    ibm: ibmIcon,
    gnu: gnuIcon,
};

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
            <button onClick={handleModalOpen}>
                {node.icon && <img src={icons[node.icon]} alt={node.name} style={{ width: '20px', marginRight: '8px' }} />}
                {node.name}
            </button>
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
