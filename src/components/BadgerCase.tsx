interface BadgerCaseProps {
  onOpenCase: () => void
}

// The Badger build told in four stages, each with one object: a photograph,
// a spec table, a photograph, the two roles the firmware plays.
export function BadgerCase({ onOpenCase }: BadgerCaseProps) {
  return (
    <section id="badger" className="section">
      <div className="container">
        <div className="head grid12">
          <h2>Badger, built end to end</h2>
          <p className="lead">
            A conference badge anyone can turn on and use, where every other
            ships as a DIY kit.
          </p>
        </div>

        <ol className="stages">
          <li className="stage grid12">
            <div className="stage__text">
              <h3>
                <span className="stage__n">1.0</span> Schematic and board
              </h3>
              <p>
                An STM32U0 Cortex-M0+, an NXP PN7160 NFC controller and a
                buck-boost converter on one Li-ion cell. I took it from
                specification and KiCAD layout through assembly and bring-up.
              </p>
            </div>
            <figure className="stage__obj crop">
              <img
                src="/projects/project-01/badger-2-web.jpg"
                alt="The bare Badger printed circuit board, an L-shaped green board with the microcontroller and NFC controller."
                width={1600}
                height={1200}
                loading="lazy"
                className="photo"
              />
            </figure>
          </li>

          <li className="stage grid12">
            <div className="stage__text">
              <h3>
                <span className="stage__n">2.0</span> Firmware, no RTOS
              </h3>
              <p>
                Bare-metal C on STM32Cube HAL, with an NCI 2.0 NFC driver
                built around a two-phase handshake.
              </p>
            </div>
            <dl className="stage__obj specs">
              <div>
                <dt>Microcontroller</dt>
                <dd>STM32U073, Arm Cortex-M0+</dd>
              </div>
              <div>
                <dt>NFC</dt>
                <dd>NXP PN7160 over NCI 2.0</dd>
              </div>
              <div>
                <dt>Display</dt>
                <dd>400×300 colour e-paper over SPI</dd>
              </div>
              <div>
                <dt>Power</dt>
                <dd>Single-cell Li-ion, buck-boost DC-DC</dd>
              </div>
              <div>
                <dt>Firmware</dt>
                <dd>C on STM32Cube HAL, no RTOS, no DMA</dd>
              </div>
            </dl>
          </li>

          <li className="stage grid12">
            <div className="stage__text">
              <h3>
                <span className="stage__n">3.0</span> The display
              </h3>
              <p>
                Images live in flash and stream to the e-paper panel in
                chunks, 30&nbsp;KB at a time.
              </p>
            </div>
            <figure className="stage__obj stage__obj--narrow crop">
              <img
                src="/projects/project-01/badger-3-web.jpg"
                alt="A hand holding the Badger e-paper panel during bring-up, showing a speckled image."
                width={1200}
                height={1600}
                loading="lazy"
                className="photo"
              />
            </figure>
          </li>

          <li className="stage grid12">
            <div className="stage__text">
              <h3>
                <span className="stage__n">4.0</span> Badge to badge
              </h3>
              <p>
                One microcontroller, two roles. I tuned the antenna against NXP
                AN13218 and built debug tooling to read device memory when a
                transfer failed.
              </p>
            </div>
            <div className="stage__obj roles">
              <div>
                <span className="label">As a tag</span>
                <p>Hands any phone a vCard as an ISO-DEP Type 4 tag.</p>
              </div>
              <div>
                <span className="label">As a reader</span>
                <p>Trades contacts and images with other badges over its own APDU set.</p>
              </div>
            </div>
          </li>
        </ol>

        <div className="case-foot grid12">
          <dl className="specs">
            <div>
              <dt>Role</dt>
              <dd>Founder and lead engineer: PCB, firmware, app</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>Capstone at Brown ECE, then a startup since August 2025</dd>
            </div>
          </dl>
          <button type="button" className="btn" onClick={onOpenCase}>
            Open the full case
          </button>
        </div>
      </div>
    </section>
  )
}
