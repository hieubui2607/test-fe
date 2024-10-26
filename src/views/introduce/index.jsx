import React from 'react';
import './introduce.scss';

import Chart from '../../assets/images/chart.svg';
import Dot from '../../assets/images/dot.png';
import Info from '../../assets/images/info.png';
import Line from '../../assets/images/line.png';
import Light from '../../assets/images/light.png';
import Tier1 from '../../assets/images/tier1.png';
import Tier2 from '../../assets/images/tier2.png';
import Tier3 from '../../assets/images/tier3.png';
import Tier4 from '../../assets/images/tier4.png';
import Tier5 from '../../assets/images/tier5.png';
import Tier6 from '../../assets/images/tier6.png';

const Introduce = () => {
  const handleMouseEnter = (tier) => {
    document.querySelectorAll(`.dot${tier}, .info${tier}, .line${tier}, .light${tier}`).forEach((el) => el.style.display = 'block');
  };

  const handleMouseLeave = (tier) => {
    document.querySelectorAll(`.dot${tier}, .info${tier}, .line${tier}, .light${tier}`).forEach((el) => el.style.display = 'none');
  };

  return (
    <div className='introduce_bg container-fluid pt-4'>
      <div className='row custom-row'>
        <div className='col-md-6 col-sm-12 d-flex align-content-center flex-wrap'>
          <div>
            <h1 className='title-introduce'>
              Unlock Rewards with the Copin Referral Program
            </h1>
            <p className='m-0 mt-2'>
              Earn rebates and commissions by inviting friends.
            </p>
            <p className='mt-0'>
              Grow your network and benefit from our 6-tier reward system.
            </p>
          </div>
          <div>
            <a className="link-underline-opacity-0 link-custom fw-medium" href="/">
              View referral Ranking <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className='col-md-6 col-sm-12 p-0 mb-3'>
          <div className='chart mx-auto p-0 '>
            <img src={Chart} alt="Chart" loading="lazy" width={'100%'} />
            <div>
              {Array.from({ length: 6 }, (_, i) => (
                <img key={i} src={Light} alt={`light${i + 1}`} className={`light${i + 1}`} style={{ display: 'none' }} />
              ))}
            </div>
            <div>
              {Array.from({ length: 6 }, (_, i) => (
                <img key={i} src={Line} alt={`light${i + 1}`} className={`line${i + 1}`} style={{ display: 'none' }} />
              ))}
            </div>
            <div>
              {[Tier1, Tier2, Tier3, Tier4, Tier5, Tier6].map((tier, i) => (
                <div
                  key={i}
                  className='tier-wrapper'
                  onMouseEnter={() => handleMouseEnter(i + 1)}
                  onMouseLeave={() => handleMouseLeave(i + 1)}
                  style={{ position: 'relative' }}
                >
                  <img src={tier} className={`tier${i + 1}`} alt={`Tier ${i + 1}`} loading="lazy" />
                  <img src={Dot} className={`dot${i + 1}`} alt={`dot${i + 1}`} style={{ display: 'none' }} />
                  <img src={Info} className={`info${i + 1}`} alt={`info${i + 1}`} style={{ display: 'none' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
