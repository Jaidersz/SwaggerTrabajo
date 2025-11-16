import { Router, Request, Response } from "express";
import * as studentService from "../services/studentService";

const router = Router();

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Obtener todos los estudiantes
 *     description: Retorna una lista de todos los estudiantes registrados en el sistema
 *     tags:
 *       - Estudiantes
 *     responses:
 *       200:
 *         description: Lista de estudiantes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get("/", async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.json(students);
});

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Obtener un estudiante por ID
 *     description: Retorna los detalles de un estudiante específico según su ID
 *     tags:
 *       - Estudiantes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID único del estudiante
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Estudiante encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Estudiante no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const student = await studentService.getStudentById(id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  res.json(student);
});

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Crear un nuevo estudiante
 *     description: Crea un nuevo estudiante en el sistema con los datos proporcionados
 *     tags:
 *       - Estudiantes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentInput'
 *     responses:
 *       201:
 *         description: Estudiante creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Datos inválidos o nombre requerido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });
  const newStudent = await studentService.addStudent(name);
  res.status(201).json(newStudent);
});

export default router;
