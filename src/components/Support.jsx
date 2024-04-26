import React from "react";
import { PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import supportImg from "../assets/support.jpg";

function Support() {
  return (
    <div>
      <div>
        <img src={supportImg} alt="" />
      </div>
      <div>
        <div>
          <h2>Support</h2>
          <h1>Finding the right team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            labore repudiandae fugiat nisi autem quo distinctio ipsa. Quasi,
            saepe vitae?
          </p>
        </div>

        <div>
          <div>
            <div>
              <PhoneIcon />
              <h3>Sales</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                nulla dignissimos, tempora cupiditate eius ipsum aliquam autem
                ipsa porro perferendis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
