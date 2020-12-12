import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/slots/">masawada slot</Link>
        </li>
        <li>
          <Link href="/slots2.html">マサワダスロット</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
