interface BadgerCaseProps {
  onOpenCase: () => void
}

// Badger as two split rows: the lead row with the bench photograph, then the
// firmware's two roles beside a bento of the board's real numbers.
export function BadgerCase({ onOpenCase }: BadgerCaseProps) {
  return (
    <section id="badger" className="section">
      <div className="container">
        <div className="split split--lead cells">
          <div className="split__text">
            <h2>Badger</h2>
            <p>
              A conference badge anyone can turn on and use, where every other
              ships as a DIY kit. My Brown capstone, now a startup.
            </p>
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
            <div>
              <button type="button" className="btn btn--ink" onClick={onOpenCase}>
                Open the full case
              </button>
            </div>
          </div>
          <div className="split__proof">
            <div
              data-slot="badger-bench"
              data-alt="Two Badger prototypes on the bench"
              className="badger__photo"
            >
              <img
                src="/projects/project-01/badger-5-web.jpg"
                alt="Two Badger prototype boards on a workbench beside a multimeter, each e-paper display showing the same portrait."
                width={1200}
                height={1600}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="split split--even cells">
          <div className="split__text">
            <h3>One microcontroller, two roles</h3>
            <p>
              As a tag, it hands any phone a vCard over ISO-DEP Type 4. As a
              reader, it trades contacts and images with other badges over its
              own APDU set.
            </p>
            <p>
              Bare-metal C on STM32Cube HAL, an NCI 2.0 driver with a two-phase
              handshake, a KiCAD board I took through bring-up, and an antenna
              tuned against NXP AN13218.
            </p>
          </div>
          <div className="split__proof">
            <div className="facts cells">
              <div
                data-slot="badger-board"
                data-alt="The bare Badger board"
                className="facts__lead"
              >
                <img
                  src="/projects/project-01/badger-2-web.jpg"
                  alt="The bare Badger printed circuit board, an L-shaped green board with the microcontroller and NFC controller."
                  width={1600}
                  height={1200}
                  loading="lazy"
                />
              </div>
              <div className="cell">
                <span className="cell__big">STM32U0</span>
                <span className="label">Arm Cortex-M0+</span>
              </div>
              <div className="cell cell--ink">
                <span className="cell__big">PN7160</span>
                <span className="label">NFC controller, NCI 2.0</span>
              </div>
              <div className="cell">
                <span className="cell__big num">400×300</span>
                <span className="label">Colour e-paper over SPI</span>
              </div>
              <div className="cell">
                <span className="cell__big num">30&nbsp;KB</span>
                <span className="label">Images streamed from flash in chunks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
