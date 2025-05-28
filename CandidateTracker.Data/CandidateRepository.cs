using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            candidate.Status = Status.Pending;
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }

        public List<Candidate> GetPending()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.Status == Status.Pending).ToList();
        }
        public Candidate GetById(int id)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }
      
            public void UpdateStatus(int candidateId, Status status)
            {
                using var context = new CandidateDataContext(_connectionString);
                context.Database.ExecuteSqlInterpolated(
                    $"UPDATE Candidates SET Status = {status} WHERE Id = {candidateId}");
            }



    }
}
