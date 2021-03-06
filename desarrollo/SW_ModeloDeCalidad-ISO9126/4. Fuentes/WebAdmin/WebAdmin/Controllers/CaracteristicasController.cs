﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using WebAdmin.Models;

namespace WebAdmin.Controllers
{
    public class CaracteristicasController : Controller
    {
        private readonly AppDbContext _context;

        public CaracteristicasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: Caracteristicas
        public async Task<IActionResult> Index()
        {
            return View(await _context.Caracteristica.ToListAsync());
        }

        // GET: Caracteristicas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var caracteristica = await _context.Caracteristica
                .FirstOrDefaultAsync(m => m.IdCaracteristica == id);
            if (caracteristica == null)
            {
                return NotFound();
            }

            return View(caracteristica);
        }

        // GET: Caracteristicas/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Caracteristicas/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("IdCaracteristica,Nombre")] Caracteristica caracteristica)
        {
            if (ModelState.IsValid)
            {
                _context.Add(caracteristica);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(caracteristica);
        }

        // GET: Caracteristicas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var caracteristica = await _context.Caracteristica.FindAsync(id);
            if (caracteristica == null)
            {
                return NotFound();
            }
            return View(caracteristica);
        }

        // POST: Caracteristicas/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("IdCaracteristica,Nombre")] Caracteristica caracteristica)
        {
            if (id != caracteristica.IdCaracteristica)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(caracteristica);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CaracteristicaExists(caracteristica.IdCaracteristica))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(caracteristica);
        }

        // GET: Caracteristicas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var caracteristica = await _context.Caracteristica
                .FirstOrDefaultAsync(m => m.IdCaracteristica == id);
            if (caracteristica == null)
            {
                return NotFound();
            }

            return View(caracteristica);
        }

        // POST: Caracteristicas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var caracteristica = await _context.Caracteristica.FindAsync(id);
            _context.Caracteristica.Remove(caracteristica);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CaracteristicaExists(int id)
        {
            return _context.Caracteristica.Any(e => e.IdCaracteristica == id);
        }
    }
}
