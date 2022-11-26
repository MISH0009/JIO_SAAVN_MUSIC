import { Router } from 'express'
import { rateLimiterMiddleware } from '../middlewares/limiter.middleware'
import { SongsController } from '../controllers/songs.controller'
import { songsSchema } from '../helpers/validator.helper'
import type { Route } from '../interfaces/route.interface'

export class SongsRoute implements Route {
  public path = '/songs'
  public router = Router()
  public songsController = new SongsController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, rateLimiterMiddleware, songsSchema, this.songsController.songDetails)
  }
}