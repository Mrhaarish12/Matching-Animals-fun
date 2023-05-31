import React from "react";
import Svg, { Ellipse, Path } from "svgs";

import { animalSize } from "../constants/board";

const Rhino = (props) => (
  <Svg height={animalSize} width={animalSize} viewBox="0 0 64 64" {...props}>
    <Path
      fill="#6E8189"
      d="M19.748 6.837l10.041 15.336 9.371-7.748c-8.329-8.663-12.454-4.032-19.412-7.588z"
    />
    <Path
      fill="#4E5E67"
      d="M19.748 6.837s1.791 10.521 10.041 15.336l.751-.661C28.769 11.26 25.373 13.41 19.748 6.837z"
    />
    <Path
      fill="#99A8AE"
      d="M51.439 4.953c-8.992 2.353-18.125-.928-19.721 5.43-1.828 7.293-4.137 9.561-5.518 12.63-3.172 7.042-10.247 9.431-14.128 13.587-2.284 8.57-5.003 6.453-3.44 10.395 1.165 2.938-.21 7.646 7.214 8.68 7.624 1.061 11.076 3.008 15.626.18 5.714-3.553 18.635-3.338 18.635-3.338L50.604 62H62V9.546L60.657 2l-5.342 4.46s-1.039-2.249-3.876-1.507z"
    />
    <Path
      fill="#6E8189"
      d="M58.229 39.639c-7.752 15.109-16.394 10.82-25.052 15.344 0 0 13.588-3.746 13.588 7.018h5.16c.001-10.872 6.304-22.362 6.304-22.362z"
    />
    <Path
      fill="#302C3B"
      d="M30.996 52.584c-3.688-3.416-9.323 1.223-7.818 1.766 1.05.377 3.059.133 4.453.416 1.537.314 4.671-.973 3.365-2.182z"
    />
    <Path
      fill="#CFD8DD"
      d="M17.807 21.801c-.832 1.334 1.416 8.769 3.455 9.759 2.133 1.032 7.877-3.018 7.441-5.694-.447-2.755-10.137-5.287-10.896-4.065zm-14.413-3.75c-3.724 2.228.452 20.492 7.323 25.643 1.792 1.344 7.113-.436 8.623-2.074 1.627-1.756 3.028-6 .437-9.367-2.409-3.126-5.96-1.919-7.276-2.987-4.65-3.782-8.266-11.721-9.107-11.215z"
    />
    <Path
      fill="#6E8189"
      d="M30.393 25.575s1.012 6.937-7.848 7.484c0 0 2.065 6.315-2.275 9.531 0 0 6.535-2.892 5.044-8.09-.001.001 8.94-1.075 5.079-8.925z"
    />
    <Path
      fill="#4E5E67"
      d="M60.657 2c-.001-.001 5.061 14.098-4.479 16.027-5.834 1.18-7.342 4.893-7.342 4.893s-2.807-7.99 2.946-10.771C58.57 8.868 60.657 2 60.657 2z"
    />
    <Path
      fill="#6E8189"
      d="M60.657 2C52.04 8.885 44.372 6.154 42.885 15.768c0 0 1.828-5.082 7.683-6.844C56.425 7.164 58.248 4.15 60.657 2zM24.172 50.82s3.227-1.055 4.75-1.055c1.834 0 4.256 1.363 4.256 1.363s-1.817-2.852-4.007-2.852c-2.249.001-4.999 2.544-4.999 2.544z"
    />
    <Ellipse fill="#302C3B" cx={46.558} cy={33.567} rx={3.138} ry={2.964} />
    <Path
      fill="#FFF"
      d="M45.703 33.069c0 1.179-1.412 1.179-1.412 0 0-1.178 1.412-1.178 1.412 0z"
    />
    <Path
      fill="#302C3B"
      d="M41.151 34.816s4.452-4.278 10.09-2.465c-2.496-5.21-10.09-2.868-10.09 2.465z"
    />
  </Svg>
);

export default Rhino;