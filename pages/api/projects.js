import projects from '../../data/projects';

// Route API : GET /api/projects
export default function handler(req, res) {
  res.status(200).json(projects);
}
