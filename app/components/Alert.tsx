import React, { useState } from "react";
import '../css/alert.css'

interface AlertButtonProps {
  message: string;
}

const AlertButton: React.FC<AlertButtonProps> = ({ message }) => {

  return (
    <div className="alert slide-in-top">
        <div>
            {message}
        </div>
    </div>
  );
};

export default AlertButton;
