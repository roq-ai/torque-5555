import * as yup from 'yup';

export const performanceAssessmentValidationSchema = yup.object().shape({
  assessment_date: yup.date().required(),
  demand_rating: yup.number().integer().required(),
  performance_rating: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
