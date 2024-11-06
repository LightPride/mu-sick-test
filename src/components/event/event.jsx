import shape1 from '../../assets/shapes/1.webp';
import shape2 from '../../assets/shapes/2.webp';
import { toast } from 'react-toastify';

export const EventComponent = () => {
  return (
    <>
      <section className="container section">
        <h3 id="pre-register" className="navigation-label">
          [event]
        </h3>
        <div className="event-block">
          <img className="autoBlur2 event-shape1" src={shape1} />
          <img className="autoBlur2 event-shape2" src={shape2} />
          <div className="autoBlur2 event-cards_date-card">
            <span className="event-cards_date-card_slogan">
              Be part of the <br /> experiment - see <br /> our musicians live!
            </span>

            <div className="event-cards_date-card_container">
              <div className="event-cards_date-card_wrapper flex-column">
                <span className="event-cards_date-card_date">Date:</span>

                <span className="event-cards_date-card_date-text">
                  16✱11✱2024 / Doors open 20:00
                </span>
              </div>

              <div className="event-cards_date-card_wrapper flex-column">
                <span className="event-cards_date-card_place">Place:</span>

                <span className="event-cards_date-card_place-text">
                  Ükskõik Baar/Pikk tn 35, 10133 Tallinn
                </span>
              </div>
            </div>
          </div>

          <div className="autoBlur2 event-cards_info-card">
            <h2 className="event-cards_info-card_header">
              About <br /> Event
            </h2>

            <p className="event-cards_info-card_text">
              We’re bringing all four of our musicians to the stage for an
              unforgettable night. We promise super chill yet chaotic vibes,
              quality music, a bar with drinks to help you get your inner
              extrovert out, raw emotions, community, and the best beats ever.
              We call it cozy chaos. You’ll feel the energy in your bones, and
              who knows? You might eave with a new favorite track.
            </p>
          </div>

          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              const form = evt.currentTarget;
              const payload = {
                name: form.elements.name.value.trim(),
                email: form.elements.email.value.trim(),
              };
              fetch('https://mu-sick-api.vercel.app/api/mails/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              }).then((response) => {
                if (!response.ok) {
                  toast.error(`Something went wrong`);
                } else if (response.ok) {
                  toast.success(
                    `Pre-Registration Successful, Please Check Your Email!`
                  );
                }
              });
              form.elements.name.value = '';
              form.elements.email.value = '';
            }}
            className="autoBlur2 event-register-form"
          >
            <div className="event-register-form_container">
              <h2 className="event-register-form_header">
                Wanna know smth cool?
              </h2>

              <p className="event-register-form_text">
                Pre-registering not only gets you in the door but also gives you
                a chance to win exclusive merch from our musicians. Fill out a
                short form and make sure to follow us on Instagram so you don’t
                miss the winner announcement!
              </p>

              <hr />

              <label className="event-register-form_input-label">
                <input
                  className="event-register-form_input event-register-form_name"
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                />
              </label>

              <label className="event-register-form_input-label">
                <input
                  className="event-register-form_input event-register-form_email"
                  type="email"
                  name="email"
                  title="Please enter a valid email address"
                  placeholder="EMAIL"
                  required
                />
              </label>
            </div>

            <button className="event-register-form_button" type="submit">
              Pre-Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
