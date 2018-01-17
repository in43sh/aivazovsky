import React, { Component } from 'react';

class Biography extends Component {
  render() {
    return (
      <div>
        <div className="Biography-top">
          <h1 className="Biography-top-name">Ivan Aivazovsky</h1>
          <h2 className="Biography-top-other-names">Иван Айвазовский (Հովհաննես Կոստանդինեսի Հայվազյան - Оганес Гайвазян)</h2>
        </div>

        <div className="Biography-parent-container">       
          <div className="Biography-child-container-body">
            <div className="portrait-wrapper">
              <div>
                <img src="https://usw2-uploads7.wikiart.org/images/ivan-aivazovsky.jpg!Portrait.jpg" className="img-wrapper" />
              </div>
              <div className="portrait-desc">
                <span>Portrait of Ivan Aivazovsky - Aleksey Tyranov</span>
              </div>
            </div>
            
            <div className="biography-container">
              <span className="biography-content">
                Throughout his lifetime, Aivazovsky contributed over 6,000 paintings to the art world,
                ranging from his early landscapes of the Crimean countryside to the seascapes and coastal
                scenes for which he is most famous. Aivazovsky was especially effective at developing the
                play of light in his paintings, sometimes applying layers of color to create a transparent
                quality, a technique for which they are highly admired.
                <br />
                <br />
                Although he produced many portraits and landscapes, over half of all of Aivazovsky’s paintings
                are realistic depictions of coastal scenes and seascapes. He is most remembered for his beautifully
                melodramatic renditions of the seascapes of which he painted the most. Many of his later works depict
                the painful heartbreak of soldiers at battle or lost at sea, with a soft celestial body taunting of
                hope from behind the clouds. His artistic technique centers on his ability to render the realistic
                shimmer of the water against the light of the subject in the painting, be it the full moon, the sunrise,
                or battleships in flames. Many of his paintings also illustrate his adeptness at filling the sky with light,
                be it the diffuse light of a full moon through fog, or the orange glow of the sun gleaming through the clouds. 
                <br />
                <br />
                In addition to being the most prolific of Russian Armenian painters, Aivazovsky founded an
                art school and gallery to engage and educate other artists of the day. He also and built
                a historical museum in his hometown on Feodosia, Crimea, in addition to beginning the first
                archaeological expeditions of the same region. 
                <br />
                <br />
                Today, Aivazovsky’s paintings have been auctioned off for millions of dollars and have been printed on
                postage stamps for Russia, Ukraine, and Armenia. Perhaps it is also to his lasting legacy that he is said
                to be one of the most forged of all Russian artists.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Biography;
