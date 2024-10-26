import Creative from '../../assets/creative.svg'
import Card from '../../components/Card'
import './works.scss'

import Work1 from '../../assets/images/work1.png'
import Work2 from '../../assets/images/work2.png'
import Work3 from '../../assets/images/work3.png'
import Work4 from '../../assets/images/work4.png'

const data_works = [
  {
    id: 'work1',
    icon: Work1,
    title: '1. Two-Level Referral System',
    description: 'Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)'
  },
  {
    id: 'work2',
    icon: Work2,
    title: '2. Earn Rebates & Commissions',
    description: 'Earn rebates on your trades and commissions from F1 and F2.'
  },
  {
    id: 'work3',
    icon: Work3,
    title: '3. Claim Daily Rewards',
    description: 'Rewards are credited after trades close and claimable daily at 0:00 UTC.'
  },
  {
    id: 'work4',
    icon: Work4,
    title: '4. Referral Tier System',
    description: 'Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days'
  }
]

const Work = () => {
  return (
    <div className='works_bg container-fluid'>
      <div className='row custom-row pt-2'>
        <div className='title_creative my-2'>
          <img src={Creative} alt='creative' className='creative'/>
          <h5 className='ask-creative m-0'>How It Works?</h5>
        </div>
        {data_works.map((work) => (
          <div key={work.id} className='col-md-3 p-1'>
            <Card icon={work.icon} title={work.title} description={work.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
