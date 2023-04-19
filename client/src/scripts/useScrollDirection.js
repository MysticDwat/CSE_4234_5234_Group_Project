import { useState, useEffect } from 'react';

export default function useScrollDirection() {
    const [scroll_direction, set_scroll_direction] = useState(null);

    useEffect(() => {
        let last_scroll_y = window.scrollY;

        const update_scroll_direction = () => {
            const scroll_y = window.scrollY;
            const direction = scroll_y > last_scroll_y ? 'down' : 'up';

            if(direction !== scroll_direction && Math.abs(scroll_y - last_scroll_y) > 10){
                set_scroll_direction(direction);
            }

            last_scroll_y = scroll_y > 0 ? scroll_y : 0;
        }

        window.addEventListener('scroll', update_scroll_direction);

        return () => {
            window.removeEventListener('scroll', update_scroll_direction);
        };

    }, [scroll_direction]);

    return scroll_direction;
}