
import { React, useState } from "react";

const OrderItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
  return (
    <li className="ag as q4 q5 q6 m20">
      <div className="cx cr ce cs">
        <div className="bv af ag as">
          <select className="cc cd ce cf c5 an b3 ch ci cj ck cl cg d4 cz q7 fr d5 q8"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}>
            <option value="0" className="fw">
              Remove
            </option>
            <option value="1" className="fw">
              1
            </option>
            <option value="2" className="fw">
              2
            </option>
            <option value="3" className="fw">
              3
            </option>
            <option value="4" className="fw">
              4
            </option>
            <option value="5" className="fw">
              5
            </option>
            <option value="6" className="fw">
              6
            </option>
            <option value="7" className="fw">
              7
            </option>
            <option value="8" className="fw">
              8
            </option>
            <option value="9" className="fw">
              9
            </option>
            <option value="10" className="fw">
              10
            </option>
            <option value="11" className="fw">
              11
            </option>
            <option value="12" className="fw">
              12
            </option>
            <option value="13" className="fw">
              13
            </option>
            <option value="14" className="fw">
              14
            </option>
            <option value="15" className="fw">
              15
            </option>
            <option value="16" className="fw">
              16
            </option>
            <option value="17" className="fw">
              17
            </option>
            <option value="18" className="fw">
              18
            </option>
            <option value="19" className="fw">
              19
            </option>
            <option value="20" className="fw">
              20
            </option>
            <option value="21" className="fw">
              21
            </option>
            <option value="22" className="fw">
              22
            </option>
            <option value="23" className="fw">
              23
            </option>
            <option value="24" className="fw">
              24
            </option>
            <option value="25" className="fw">
              25
            </option>
            <option value="26" className="fw">
              26
            </option>
            <option value="27" className="fw">
              27
            </option>
            <option value="28" className="fw">
              28
            </option>
            <option value="29" className="fw">
              29
            </option>
            <option value="30" className="fw">
              30
            </option>
            <option value="31" className="fw">
              31
            </option>
            <option value="32" className="fw">
              32
            </option>
            <option value="33" className="fw">
              33
            </option>
            <option value="34" className="fw">
              34
            </option>
            <option value="35" className="fw">
              35
            </option>
            <option value="36" className="fw">
              36
            </option>
            <option value="37" className="fw">
              37
            </option>
            <option value="38" className="fw">
              38
            </option>
            <option value="39" className="fw">
              39
            </option>
            <option value="40" className="fw">
              40
            </option>
            <option value="41" className="fw">
              41
            </option>
            <option value="42" className="fw">
              42
            </option>
            <option value="43" className="fw">
              43
            </option>
            <option value="44" className="fw">
              44
            </option>
            <option value="45" className="fw">
              45
            </option>
            <option value="46" className="fw">
              46
            </option>
            <option value="47" className="fw">
              47
            </option>
            <option value="48" className="fw">
              48
            </option>
            <option value="49" className="fw">
              49
            </option>
            <option value="50" className="fw">
              50
            </option>
            <option value="51" className="fw">
              51
            </option>
            <option value="52" className="fw">
              52
            </option>
            <option value="53" className="fw">
              53
            </option>
            <option value="54" className="fw">
              54
            </option>
            <option value="55" className="fw">
              55
            </option>
            <option value="56" className="fw">
              56
            </option>
            <option value="57" className="fw">
              57
            </option>
            <option value="58" className="fw">
              58
            </option>
            <option value="59" className="fw">
              59
            </option>
            <option value="60" className="fw">
              60
            </option>
            <option value="61" className="fw">
              61
            </option>
            <option value="62" className="fw">
              62
            </option>
            <option value="63" className="fw">
              63
            </option>
            <option value="64" className="fw">
              64
            </option>
            <option value="65" className="fw">
              65
            </option>
            <option value="66" className="fw">
              66
            </option>
            <option value="67" className="fw">
              67
            </option>
            <option value="68" className="fw">
              68
            </option>
            <option value="69" className="fw">
              69
            </option>
            <option value="70" className="fw">
              70
            </option>
            <option value="71" className="fw">
              71
            </option>
            <option value="72" className="fw">
              72
            </option>
            <option value="73" className="fw">
              73
            </option>
            <option value="74" className="fw">
              74
            </option>
            <option value="75" className="fw">
              75
            </option>
            <option value="76" className="fw">
              76
            </option>
            <option value="77" className="fw">
              77
            </option>
            <option value="78" className="fw">
              78
            </option>
            <option value="79" className="fw">
              79
            </option>
            <option value="80" className="fw">
              80
            </option>
            <option value="81" className="fw">
              81
            </option>
            <option value="82" className="fw">
              82
            </option>
            <option value="83" className="fw">
              83
            </option>
            <option value="84" className="fw">
              84
            </option>
            <option value="85" className="fw">
              85
            </option>
            <option value="86" className="fw">
              86
            </option>
            <option value="87" className="fw">
              87
            </option>
            <option value="88" className="fw">
              88
            </option>
            <option value="89" className="fw">
              89
            </option>
            <option value="90" className="fw">
              90
            </option>
            <option value="91" className="fw">
              91
            </option>
            <option value="92" className="fw">
              92
            </option>
            <option value="93" className="fw">
              93
            </option>
            <option value="94" className="fw">
              94
            </option>
            <option value="95" className="fw">
              95
            </option>
            <option value="96" className="fw">
              96
            </option>
            <option value="97" className="fw">
              97
            </option>
            <option value="98" className="fw">
              98
            </option>
          </select>
          <div className="ai q9 g3 qa">
            <div className="c4 c3 cp">
              <svg
                width="24px"
                height="24px"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z"
                  fill="#000000"
                  transform="rotate(180, 12, 12)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer _16"></div>
      <a
        className="ag cw as qb kf"
        href="/checkout?diningMode=DELIVERY&amp;mod=editItem&amp;modctx=b2bb74f7-b4aa-44c8-b539-63f0a20bb855&amp;ps=1"
      >
        <div className="qc cv">
          <div className="ag as e7">
            <div className="cx fc ce cf b3">{item.item}</div>
            <div className="spacer _8"></div>
            <div className="dk cx cr ce cs qd">${quantity * item.price}</div>
          </div>
          {/* <div className="cc fc ce cs b3 qg">Choose Your Filling ($2.75)</div>
          <ul>
            <li className="cc fc ce cs cu">Smoked Brisket</li>
          </ul>
          <div className="cc fc ce cs b3 qg">Choose Your Portion</div>
          <ul>
            <li className="cc fc ce cs cu">Half Portion</li>
            <li className="cc fc ce cs cu">Half Carnitas</li>
          </ul> */}
        </div>
      </a>
    </li>
  );
};

export default OrderItem;
