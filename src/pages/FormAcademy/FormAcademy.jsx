import './FormAcademy.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function FormAcademy() {
  const [pagina, setPagina] = useState(0)
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  return (
    <div className={`contenedor-${mobileQuery}`}>
      <form
        className={`container-${mobileQuery}`}
        action=""
        style={pagina === 1 ? { backgroundColor: '#0049db7f' } : pagina === 2 ? { backgroundColor: '#00133878' } : null}
      >
        <span className="Formulario">
          <h1 className={`Form-${mobileQuery}`}>FORM</h1>
        </span>
        {pagina === 1 ? (
          <p className={`Form-${mobileQuery}`}> Self Gen</p>
        ) : pagina === 2 ? (
          <p className={`Form-${mobileQuery}`}>Academy</p>
        ) : pagina === 3 ? (
          <p className={`Form-${mobileQuery}`}>Event Web</p>
        ) : (
          <p className={`Form-${mobileQuery}`}></p>
        )}

        <label>
          <input name="name" type="hidden" />
        </label>
        <label>
          <input type="text" name="ConsultanId" placeholder="Consultant ID" className={`espacio-${mobileQuery}`} required />
        </label>
        <br />
        <br />
        <label>
          <input type="text" name="CustomerName" placeholder="Customer First Name" className={`espacio-${mobileQuery}`} required />
        </label>
        <br />
        <br />
        <label>
          <input type="number" name="CustomerLast" placeholder="Customer Last Name" className={`espacio-${mobileQuery}`} required />
        </label>
        <br />
        <br />

        <label>
          <select className={`Languaje-${mobileQuery}`}>
            <option selected>Selected Language Preference</option>
            <option value="English">English</option>
            <option value="Spanish preferred">Spanish preferred</option>
            <option value="Spanish Only">Spanish Only</option>
            <option value="French/Creole Only">French/Creole Only</option>
            <option value="Portugues">Portugues</option>
          </select>
        </label>
        <br />
        <br />
        <div className={`botones-${mobileQuery}`}>
          <span>
            <button
              onClick={() => setPagina(1)}
              type="submit"
              className={`boton1-${mobileQuery}`}
              style={
                pagina === 1
                  ? {
                      backgroundColor: 'white',
                      color: '#000000',
                      boxShadow: '1px 4px 10px 1px #000000',
                    }
                  : null
              }
            >
              Self Gen
            </button>
          </span>

          <span>
            <button
              onClick={() => setPagina(2)}
              type="submit"
              className={`boton2-${mobileQuery}`}
              style={
                pagina === 2
                  ? {
                      backgroundColor: 'white',
                      color: '#000000',
                      boxShadow: '1px 4px 10px 1px #000000',
                    }
                  : null
              }
            >
              Academy
            </button>
          </span>

          <span>
            <button
              onClick={() => setPagina(3)}
              type="submit"
              className={`boton3-${mobileQuery}`}
              style={
                pagina === 3
                  ? {
                      backgroundColor: 'white',
                      color: '#000000',
                      boxShadow: '1px 4px 10px 1px #000000',
                    }
                  : null
              }
            >
              Event Web
            </button>
          </span>
        </div>
        <>
          <br />
          <>
            {pagina === 1 ? (
              <>
                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Is this the Homeowner?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>
                  </label>

                  <span className={`Not-${mobileQuery}`}>
                    <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                    <span>No</span>
                  </span>
                </span>
                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Is shingle roof less than 10 yrs old?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="IsOld" className="checkbox" value="Yes" />
                      <span className={`yes-${mobileQuery}`}>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>

                <br />
                <label>
                  <p className={`texto-${mobileQuery}`}>Roof Type</p>

                  <select className={`RoofType-${mobileQuery}`}>
                    <option selected>Selected</option>
                    <option value="Shingle">Shingle</option>
                    <option value="Concrete Tile">Concrete Tile</option>
                    <option value="Metal">Metal</option>
                    <option value="Clay Tile">Clay Tile</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <br />

                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Roofing Quote Needed?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="RoofingQuote" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>
                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Need a Proposal?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="NeedProposal" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Appointment Date</p>
                  <input datetypeformat="en-US" type="date" name="AppointmentDate" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Appointment Time</p>
                  <input type="time" name="AppointmentTime" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Street</p>
                  <input type="text" name="Street" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer&apos;s City</p>
                  <input type="text" name="CustomerCity" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer&apos;s Zip Code</p>
                  <input type="text" name="CustomerZipCode" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer Mobile Phone</p>
                  <input type="number" name="customerMobilePhone" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer Email</p>
                  <input type="text" name="CustomerEmail" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Client Notes</p>
                  <textarea cols="500" rows="5" type="text" name="ClientNotes" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Utility Bill File Upload</p>
                  <input type="file" name="UtilityBill" className={`espacio-${mobileQuery}`} multiple />
                </label>
              </>
            ) : null}

            {pagina === 2 ? (
              <>
                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Is this the Homeowner?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>
                  </label>

                  <span className={`Not-${mobileQuery}`}>
                    <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                    <span>No</span>
                  </span>
                </span>
                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Is shingle roof less than 10 yrs old?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="IsOld" className="checkbox" value="Yes" />
                      <span className={`yes-${mobileQuery}`}>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>

                <br />
                <label>
                  <p className={`texto-${mobileQuery}`}>Roof Type</p>

                  <select className={`RoofType-${mobileQuery}`}>
                    <option selected>Selected</option>
                    <option value="Shingle">Shingle</option>
                    <option value="Concrete Tile">Concrete Tile</option>
                    <option value="Metal">Metal</option>
                    <option value="Clay Tile">Clay Tile</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <br />

                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Roofing Quote Needed?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="RoofingQuote" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>
                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Need a Proposal?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="NeedProposal" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Appointment Date</p>
                  <input type="date" name="AppointmentDate" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Appointment Time</p>
                  <input type="time" name="AppointmentTime" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Street</p>
                  <input type="text" name="Street" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer's City</p>
                  <input type="text" name="CustomerCity" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer's Zip Code</p>
                  <input type="text" name="CustomerZipCode" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer Mobile Phone</p>
                  <input type="number" name="customerMobilePhone" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer Email</p>
                  <input type="text" name="CustomerEmail" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Client Notes</p>
                  <textarea cols="500" rows="5" type="text" name="ClientNotes" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Utility Bill File Upload</p>
                  <input type="file" name="UtilityBill" className={`espacio-${mobileQuery}`} multiple />
                </label>
              </>
            ) : null}
            {pagina === 3 ? (
              <>
                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Is this the Homeowner?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>
                  </label>

                  <span className={`Not-${mobileQuery}`}>
                    <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                    <span>No</span>
                  </span>
                </span>
                <br />
                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Roofing Quote Needed?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="RoofingQuote" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>
                <br />

                <span>
                  <label>
                    <p className={`texto-${mobileQuery}`}>Need a Proposal?</p>
                    <span className={`yes-${mobileQuery}`}>
                      <input type="checkbox" name="NeedProposal" className="checkbox" value="Yes" />
                      <span>Yes</span>
                    </span>

                    <span className={`Not-${mobileQuery}`}>
                      <input type="checkbox" name="IsHomeowner" className="checkbox" value="No" />
                      <span>No</span>
                    </span>
                  </label>
                </span>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Appointment Date</p>
                  <input datetypeformat="en-US" type="date" name="AppointmentDate" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Appointment Time</p>
                  <input type="time" name="AppointmentTime" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Street</p>
                  <input type="text" name="Street" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer's City</p>
                  <input type="text" name="CustomerCity" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer's Zip Code</p>
                  <input type="text" name="CustomerZipCode" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer Mobile Phone</p>
                  <input type="number" name="customerMobilePhone" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Customer Email</p>
                  <input type="text" name="CustomerEmail" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Client Notes</p>
                  <textarea cols="500" rows="5" type="text" name="ClientNotes" className={`espacio-${mobileQuery}`} />
                </label>
                <br />

                <label>
                  <p className={`texto-${mobileQuery}`}>Utility Bill File Upload</p>
                  <input type="file" name="UtilityBill" className={`espacio-${mobileQuery}`} multiple />
                </label>

                <label>
                  <p className={`texto-${mobileQuery}`}>Event Name Drop Down </p>

                  <select className={`EventNameDown-${mobileQuery}`}>
                    <option selected>Selected</option>
                    <option value="Barvo Kissimee">Barvo Kissimee</option>
                    <option value="Bravo Ocala">Bravo Ocala</option>
                    <option value="Bravo Orange City">Bravo Orange City</option>
                    <option value="Bravo Semoran">Bravo Semoran</option>
                    <option value="Bravo Lake Nona">Bravo Lake Nona</option>
                    <option value="Bravo Tampa">Bravo Tampa</option>
                  </select>
                </label>
              </>
            ) : null}
          </>
          <br />
          <br />
          <span>
            <button type="submit" className={`submit-${mobileQuery}`}>
              Submit
            </button>
          </span>
          <span>
            <button type="reset" className={`reset-${mobileQuery}`}>
              Reset
            </button>
          </span>
        </>
      </form>
    </div>
  )
}

export default FormAcademy
