import { useLocation } from 'react-router-dom';
import logo from '../assets/images/block.png'

const View = () => {
  const location = useLocation();

  const { data } = location.state || {};

  return (
<>

<div className="w-[700px] h-[320px] bg-blue-200 m-auto mt-20">
 
<img src={logo} width="80" height="30" className='ml-80'/>
    <div>
      
        <div className="text-center text-xl">
          <h2>Kerala Blockchain Academy</h2>
        </div>
      
      <div className="row pm-certificate-body">
        <div className="pm-certificate-block">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* LEAVE EMPTY */}
              </div>
              <div className="pm-certificate-name underline margin-0 col-xs-8 text-center">
                <span id="name" className="pm-name-text bold">
                  {data.username}
                </span>
              </div>
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="pm-earned col-xs-8 text-center">
                <span className="pm-earned-text padding-0 block cursive">has earned</span>
                <span id="grade" className="pm-credits-text block bold sans">
                  {data.grade}
                </span>
              </div>
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="col-xs-12"></div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="pm-course-title col-xs-8 text-center">
                <span className="pm-earned-text block cursive">while completing the training course
                  entitled</span>
              </div>
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2">
                {/* <!-- LEAVE EMPTY --> */}
              </div>
              <div className="pm-course-title underline col-xs-8 text-center">
                <span id="course" className="pm-credits-text block bold sans">
                 {data.course}
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <div className="col pm-certified text-center">
               
                <span id="ID" className="pm-credits-text block bold sans"> ID : {data.cert_id}
                </span>
              </div>
              <div className="col pm-certified text-center">
                <span id="date" className="pm-credits-text block sans">{data.issuedate}</span>
                <span>Place: Trivandrum</span><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>  )
}

export default View