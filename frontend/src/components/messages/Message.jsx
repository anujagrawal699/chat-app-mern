import React from 'react';

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble component' 
                src={
                    ""
                }
                />
                </div> 
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>11:11</div>
          Hello Baby!
        </div>
    </div> 
  );
};

export default Message;