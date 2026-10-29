interface BadgerCaseProps {
  onOpenCase: () => void
}

// Badger as a statement: one sentence, the pencilled edition line, then the
// wall text beside a ruled table of the board.
export function BadgerCase({ onOpenCase }: BadgerCaseProps) {
  return (
    <section id="badger" className="section">
      <div className="container">
        <div className="grid12">
          <h2 className="statement">
            Badger is a conference badge anyone can turn on and use, where every
            other ships as a DIY kit.
          </h2>
          <p className="pencil badger__meta">
            No. 01, my Brown capstone, a startup since August 2025
          </p>
        </div>

        <div className="grid12 badger__body">
          <div className="badger__text">
            <p className="dropcap">
              I designed the whole stack: components, BOM, a KiCAD schematic and
              board, bring-up, RF tuning against NXP AN13218, bare-metal firmware
              and the companion app. As a tag it hands any phone a vCard; as a
              reader it trades contacts and images with other badges.
            </p>
            <div>
              <button type="button" className="btn" onClick={onOpenCase}>
                Open the full case
              </button>
            </div>
          </div>
          <dl className="ruled specs badger__specs">
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
              <dt>Images</dt>
              <dd>30&nbsp;KB, streamed from flash in chunks</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>Founder and lead engineer</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
